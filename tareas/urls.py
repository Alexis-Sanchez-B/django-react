from django.urls import path, include
from rest_framework import routers
from tareas import views

router = routers.DefaultRouter()
router.register(r'tareas', views.TareaView, 'tareas')

#Ver sionado de API
urlpatterns = [
    #Esto esta generando el GET POST PUT DELETE
    path("api/v1/",include(router.urls))
]