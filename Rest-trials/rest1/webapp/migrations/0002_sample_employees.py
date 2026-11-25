from django.db import migrations

# Made-up sample people.
SAMPLES = [("Asha", "Rao", 1), ("Vikram", "Sen", 2), ("Meera", "Iyer", 3)]


def add_samples(apps, schema_editor):
    Employee = apps.get_model("webapp", "employees")
    if Employee.objects.exists():
        return
    for first, last, number in SAMPLES:
        Employee.objects.create(firstname=first, lastname=last, emp_id=number)


class Migration(migrations.Migration):
    dependencies = [("webapp", "0001_initial")]
    operations = [migrations.RunPython(add_samples, migrations.RunPython.noop)]
