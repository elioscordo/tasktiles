import datetime

from rest_framework.test import APITestCase

from tile.models import Task, Tile


class TileTestCase(APITestCase):
    today = datetime.date.today()
    in_one_year = datetime.date.today().replace(year=datetime.date.today().year + 1)

    def setUp(self):
        self.tile1 = Tile.objects.create(launch=self.today, status="pending")
        self.tile2 = Tile.objects.create(launch=self.in_one_year, status="live")

    def test_get_tiles(self):
        request = self.client.get('/api/tiles/tiles', format='json')

        self.assertEqual(len(request.data), 2)
        self.assertEqual(request.data[0]["id"], self.tile1.id)

    def test_get_tiles_filter_from(self):
        request = self.client.get('/api/tiles/tiles', {"from": self.in_one_year}, format='json')

        self.assertEqual(len(request.data), 1)

    def test_get_tiles_filter_to(self):
        request = self.client.get('/api/tiles/tiles', {"to": self.today}, format='json')

        self.assertEqual(len(request.data), 1)

    def test_get_tiles_filter_status(self):
        request = self.client.get('/api/tiles/tiles', {"status": "live"}, format='json')

        self.assertEqual(len(request.data), 1)

    def test_create(self):
        self.client.post('/api/tiles/tiles', {"launch": self.today, "status":"pending"}, format='json')

        self.assertEqual(Tile.objects.all().count(), 3)

    def test_delete(self):
        self.client.delete('/api/tiles/tile/{}'.format(self.tile1.id), format='json')
        self.assertEqual(Tile.objects.all().count(), 1)

    def test_update(self):
        self.client.patch('/api/tiles/tile/{}'.format(self.tile1.id), {"status": "archived"}, format='json')
        self.assertEqual(Tile.objects.get(id=self.tile1.id).status, "archived")


class TaskTestCase(APITestCase):
    today = datetime.date.today()
    in_one_year = datetime.date.today().replace(year=datetime.date.today().year + 1)

    def setUp(self):
        self.tile = Tile.objects.create(launch=self.today, status="pending")
        Task.objects.create(title="t1", body="b1", type="t1", order=0, tile=self.tile)
        Task.objects.create(title="t2", body="b2", type="t2", order=1, tile=self.tile)

    def test_get_tasks(self):
        request = self.client.get('/api/tiles/tiles', format='json')

        self.assertEqual(len(request.data), 1)
        self.assertEqual(len(request.data[0]["task_set"]), 2)

    def test_create_task(self):
        post_data = {"title": "t3", "body": "b3", "type": "t3", "order": "1", "tile": self.tile.id}
        self.client.post('/api/tiles/tasks', post_data, format='json')
        self.assertEqual(Task.objects.all().count(), 3)
