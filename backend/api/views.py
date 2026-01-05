from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView


class HealthView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response({"status": "ok"})


class RootView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        return Response(
            {
                "message": "API is running.",
                "endpoints": ["/health/", "/me/"],
            }
        )


class MeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        return Response(
            {
                "id": user.id,
                "username": user.get_username(),
                "email": user.email,
            }
        )
