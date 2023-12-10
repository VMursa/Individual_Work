from django.urls import path
from .views import StudentView
from .views import CreateUserView
from .views import LoginView

urlpatterns = [
    path("students/", StudentView.as_view()),
    path("students/<int:pk>/", StudentView.as_view()),
    path('create_user/', CreateUserView.as_view(), name='create_user'),
    path('login/', LoginView.as_view(), name='login'),
]
