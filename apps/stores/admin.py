from django.contrib import admin

from . import models


# TabularInlines
class ProductReviewInLine(admin.TabularInline):
    model = models.ProductReview
    extra = 0


class ProductInLine(admin.TabularInline):
    model = models.Product
    extra = 0


@admin.register(models.Store)
class StoreAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "user",
    )
    search_fields = ("name",)
    list_filter = ("name",)
    ordering = ("name",)


@admin.register(models.ProductCategory)
class ProductCategoryAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "description",
    )
    search_fields = ("name",)
    list_filter = ("name",)
    ordering = ("name",)
    inlines = [ProductInLine]


@admin.register(models.Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "description",
        "category",
        "seller",
        "price",
        "stock",
    )
    search_fields = ("name",)
    list_filter = ("name",)
    ordering = ("name",)
    inlines = [ProductReviewInLine]


@admin.register(models.OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = (
        "product",
        "quantity",
        "total_price",
    )
    search_fields = ("product",)
    list_filter = ("product",)
    ordering = ("product",)


@admin.register(models.Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = (
        "user",
        "order_date",
        "total_price",
    )
    search_fields = ("user",)
    list_filter = ("user",)
    ordering = ("user",)


@admin.register(models.ProductReview)
class ProductReviewAdmin(admin.ModelAdmin):
    list_display = (
        "user",
        "product",
        "rating",
    )
    search_fields = ("user",)
    list_filter = ("user",)
    ordering = ("user",)
