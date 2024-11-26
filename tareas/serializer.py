from rest_framework import serializers
from .models import Tarea

class TareaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tarea
        #fields = ('id', 'titulo', 'descripcion', 'realizado')
        fields = '__all__' # Trae todos los campos del modelo independiente de cuantos sean
    