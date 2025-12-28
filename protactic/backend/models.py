from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    USER_TYPE_CHOICES = (
        ('ADMIN', 'Administrador'),
        ('TREINADOR', 'Treinador'),
    )

    user_type = models.CharField(
        max_length=10,
        choices=USER_TYPE_CHOICES
    )

class Clube(models.Model):
    nome = models.CharField(max_length=100)
    pais = models.CharField(max_length=50)
    ano_fundacao = models.IntegerField()
    escudo = models.ImageField(upload_to='escudos/', blank=True, null=True)

    def __str__(self):
        return self.nome