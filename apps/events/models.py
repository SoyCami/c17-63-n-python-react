from base.models import BaseModel
from django.conf import settings
from django.core.exceptions import ValidationError
from django.db import models
from django.utils import timezone

# Create your models here.


class EventCategory(BaseModel):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name


class Interests(BaseModel):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    interest_1 = models.ForeignKey(EventCategory, on_delete=models.CASCADE, related_name="interest_1")
    interest_2 = models.ForeignKey(EventCategory, on_delete=models.CASCADE, related_name="interest_2")
    interest_3 = models.ForeignKey(EventCategory, on_delete=models.CASCADE, related_name="interest_3")

    def __str__(self):
        return self.user.name


class Event(BaseModel):
    event_name = models.CharField(max_length=100)
    event_category = models.ForeignKey("EventCategory", on_delete=models.CASCADE)
    event_description = models.TextField()
    event_organizer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    event_location = models.CharField(max_length=100)
    event_date = models.DateTimeField()
    event_picture = models.ImageField(upload_to="event_pictures/", blank=True, null=True)
    paid = models.BooleanField()
    price = models.DecimalField(decimal_places=2, max_digits=10, blank=True, null=True)
    has_limit = models.BooleanField()
    limit = models.PositiveIntegerField(blank=True, null=True)

    def clean(self):
        super().clean()
        if self.event_date and self.event_date < timezone.now():
            raise ValidationError("La fecha del evento debe ser a partir del día actual.")
        if self.paid and not self.price:
            raise ValidationError("Debe ingresar un precio para eventos pagos.")
        if self.has_limit and not self.limit:
            raise ValidationError("Debe ingresar un límite de participantes para eventos con limite.")
        if not self.paid and self.price:
            raise ValidationError("No puede tener un precio para eventos no pagos.")
        if not self.has_limit and self.limit:
            raise ValidationError("No puede tener un límite de participantes para eventos sin limite.")

    def __str__(self):
        return self.event_name


class EventRegisteredUser(BaseModel):
    STATUS_CHOICES = (
        ("1", "Pendiente"),
        ("2", "Confirmado"),
        ("3", "Rechazado"),
        ("4", "Cancelado"),
    )
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    registration_status = models.CharField(default="1", choices=STATUS_CHOICES, max_length=1)

    class Meta:
        constraints = [models.UniqueConstraint(fields=["event", "user"], name="unique_event_user")]

    def clean(self):
        super().clean()
        if self.event.has_limit and self.event.eventregistereduser_set.count() >= self.event.limit:
            raise ValidationError("El evento ha alcanzado su límite de registrados.")

    def __str__(self):
        return f"{self.user.email} - {self.event.event_name}"


class EventReview(BaseModel):
    RATING_CHOICES = (
        (1, "1 - Muy malo"),
        (2, "2 - Malo"),
        (3, "3 - Regular"),
        (4, "4 - Bueno"),
        (5, "5 - Excelente"),
    )

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField(choices=RATING_CHOICES)
    review_text = models.TextField(max_length=500)

    def __str__(self):
        return f"{self.user.email} - {self.rating}"
