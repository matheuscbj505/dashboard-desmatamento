from django.db import models

class Desmatamento(models.Model):
    ano = models.IntegerField()
    regiao = models.CharField(max_length=100)
    hectares = models.FloatField()

    def __str__(self):
        return f"{self.regiao} - {self.ano}"