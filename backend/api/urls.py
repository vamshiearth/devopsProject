from django.urls import path

from .views import HealthView, MeView, RootView

urlpatterns = [
    path("", RootView.as_view(), name="root"),
    path("health/", HealthView.as_view(), name="health"),
    path("me/", MeView.as_view(), name="me"),
]
