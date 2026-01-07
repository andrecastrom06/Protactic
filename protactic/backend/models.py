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
    
class Competicao(models.Model):
    nome = models.CharField(max_length=200)
    
    tamanho = models.CharField(max_length=50) 
    localidade = models.CharField(max_length=100, blank=True, null=True)
    
    tipo_participantes = models.CharField(max_length=50) 
    divisao = models.CharField(max_length=50) 
    tipo_formato = models.CharField(max_length=50) 
    qtd_participantes = models.IntegerField(default=0)
    
    tem_trofeu = models.BooleanField(default=False)
    tem_premiacao_financeira = models.BooleanField(default=False)
    valor_premiacao = models.DecimalField(max_digits=15, decimal_places=2, null=True, blank=True)
    
    garante_vaga = models.BooleanField(default=False)
    competicao_destino = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.nome

class Jogador(models.Model):
    POSICOES_CHOICES = (
        ('Goleiro', 'Goleiro'),
        ('Zagueiro', 'Zagueiro'),
        ('Lateral Esquerdo', 'Lateral Esquerdo'),
        ('Lateral Direito', 'Lateral Direito'),
        ('Volante', 'Volante'),
        ('Meio-campista', 'Meio-campista'),
        ('Meia Atacante', 'Meia Atacante'),
        ('Ponta Esquerda', 'Ponta Esquerda'),
        ('Ponta Direita', 'Ponta Direita'),
        ('Centroavante', 'Centroavante'),
    )

    PERNAS_CHOICES = (
        ('Destro', 'Destro'),
        ('Canhoto', 'Canhoto'),
        ('Ambidestro', 'Ambidestro'),
    )

    nome = models.CharField(max_length=150)
    cpf = models.CharField(max_length=14, unique=True)
    idade = models.IntegerField()
    peso = models.FloatField(help_text="Peso em kg")
    altura = models.FloatField(help_text="Altura em metros")
    nacionalidade = models.CharField(max_length=50)
    posicao = models.CharField(max_length=30, choices=POSICOES_CHOICES)
    perna = models.CharField(max_length=20, choices=PERNAS_CHOICES)
    foto = models.ImageField(upload_to='jogadores/', blank=True, null=True)
    
    # Relationship
    clube = models.ForeignKey(Clube, on_delete=models.CASCADE, related_name='jogadores')

    def __str__(self):
        return f"{self.nome} ({self.clube.nome})"