from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import employees
from .serializers import employeeSerializer


class employeeList(APIView):
    serializer_class = employeeSerializer

    def get(self, request):
        serializer = employeeSerializer(employees.objects.all(), many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = employeeSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
