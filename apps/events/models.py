from django.db import models
from django.conf import settings
from django.utils import timezone
from django.core.exceptions import ValidationError


# Create your models here.

class EventCategory(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name


class Event(models.Model):
    event_name = models.CharField(max_length=100)
    event_category = models.ForeignKey('EventCategory', on_delete=models.CASCADE)
    event_description = models.TextField()
    event_organizer = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    event_location = models.CharField(max_length=100)
    event_date = models.DateTimeField()
    event_picture = models.ImageField(upload_to='event_pictures/')
    paid = models.BooleanField()
    price = models.DecimalField(decimal_places=2, max_digits=10, default=None)
    has_limit = models.BooleanField()
    limit = models.IntegerField(default=None)

    def clean(self):
        super().clean()
        if self.event_date and self.event_date < timezone.now():
            raise ValidationError("La fecha del evento debe ser a partir del día actual.")

    def __str__(self):
        return self.event_name


class EventRegisteredUser(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    registration_status = models.CharField(max_length=50)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['event', 'user'], name='unique_event_user')
        ]

    def clean(self):
        super().clean()
        if self.event.has_limit and self.event.eventregistereduser_set.count() >= self.event.limit:
            raise ValidationError("El evento ha alcanzado su límite de registrados.")
        
    def __str__(self):
        return f"{self.user.username} - {self.event.event_name}"


class EventReview(models.Model):
    RATING_CHOICES = (
        (1, '1 - Muy malo'),
        (2, '2 - Malo'),
        (3, '3 - Regular'),
        (4, '4 - Bueno'),
        (5, '5 - Excelente'),
    )

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField(choices=RATING_CHOICES)
    review_text = models.TextField(max_length=500)
    date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.user.username} - {self.rating}"

