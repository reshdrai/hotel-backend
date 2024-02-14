from django.db import models
from django.urls import reverse

class Category(models.Model):
    name = models.CharField(max_length=250, db_index = True)     
    slug = models.SlugField(max_length=250, unique=True)

    class Meta:
        verbose_name_plural = 'categories'    

    def __str__(self):
        return self.name


class Room(models.Model):
    title = models.CharField(max_length=30)
    slug = models.SlugField(max_length=225)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    price_per_night = models.DecimalField(max_digits=6, decimal_places=2)
    capacity = models.IntegerField()
    cover_image = models.ImageField(upload_to='images/', default='default_image.jpg')
    recommended = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = 'Rooms' 

    def __str__(self):
        return self.title
    

