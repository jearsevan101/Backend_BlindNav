## Dokumentasi Endpoint Backend
### Buildings
1.  Get all buildings <br>
    Mendapatkan semua Buildings yang ada di database <br>
    Endpoint: <br>
    ```
    GET /buildings
    ```
2.  Create new buildings <br>
    Membuat buildings baru <br>
    Endpoint: <br>
    ```
    POST /buildings
    ```
    ```
    {
        "building_name": "Nama Gedung Baru",
        "total_floors": 4
    }
    ```
3.  Delete existing buildings <br>
    Menghapus buildings yang ada di database berdasarkan Id <br>
    Endpoint: <br>
    ```
    DELETE /buildings/:id
    ```
4.  Update buildings by Id <br>
    Merubah data buildings berdasarkan Id <br>
    Endpoint: <br>
    ```
    PUT /buildings/:id
    ```
    
### Aruco Markers
1.  Get all Aruco Markers <br>
    Mendapatkan semua Aruco Markers yang ada di database <br>
    Endpoint: <br>
    ```
    GET /aruco-markers
    ```
2.  Get Aruco Markers By Id <br>
    Mendapatkan Aruco Markers sesuai dengan id yang diberikan <br>
    Endpoint: <br>
    ```
    GET /aruco-markers/:id
    ```
3.  Create new Aruco Markers <br>
    Membuat data Aruco Markers baru <br>
    Endpoint: <br>
    ```
    POST /aruco-markers
    ```
    ```
    {
        "building_id": 1,
        "floor": 2,
        "point_name": "Main Entrance",
        "point_type": "Entrance",
        "left_room_id": null,
        "right_room_id": 3,
        "forward_room_id": null,
        "backward_room_id": null,
        "description": "Main entrance to the building."
    }
    ```
4.  Delete existing Aruco Markers <br>
    Menghapus Aruco Markers yang ada di database berdasarkan Id <br>
    Endpoint: <br>
    ```
    DELETE /aruco-markers/:id
    ```
5.  Update Aruco Markers by Id <br>
    Merubah data Aruco Markers berdasarkan Id <br>
    Endpoint: <br>
    ```
    PUT /aruco-markers/:id
    ```
### Graph Connections
1.  Get all Graph Connections <br>
    Mendapatkan semua data Graph Connections yang ada di database <br>
    Endpoint: <br>
    ```
    GET /graph-connections
    ```
2.  Get Graph Connections By Id <br>
    Mendapatkan data Graph Connections sesuai dengan id yang diberikan <br>
    Endpoint: <br>
    ```
    GET /graph-connections/:id
    ```
3.  Create new Graph Connections <br>
    Membuat data Graph Connections baru <br>
    Endpoint: <br>
    ```
    POST /graph-connections
    ```
    ```
    {
        "from_marker_id": 1,
        "to_marker_id": 2,
        "distance": 10.5,
        "angle": 45.0
    }
    ```
4.  Delete existing Graph Connections <br>
    Menghapus Graph Connections yang ada di database berdasarkan Id <br>
    Endpoint: <br>
    ```
    DELETE /graph-connections/:id
    ```
5.  Update Graph Connections by Id <br>
    Merubah data Graph Connections berdasarkan Id <br>
    Endpoint: <br>
    ```
    PUT /graph-connections/:id
    ```

### Professors
1.  Get all Professors <br>
    Mendapatkan semua data Professors yang ada di database <br>
    Endpoint: <br>
    ```
    GET /professors
    ```
2.  Get Professors By Id <br>
    Mendapatkan data Professors sesuai dengan id yang diberikan <br>
    Endpoint: <br>
    ```
    GET /professors/:id
    ```
3.  Create new Professors <br>
    Membuat data Professors baru <br>
    Endpoint: <br>
    ```
    POST /professors
    ```
    ```
    {
        "name": "Nama Dosen",
        "additional_info": "Informasi Tambahan"
    }

    ```
4.  Delete existing Professors <br>
    Menghapus Professors yang ada di database berdasarkan Id <br>
    Endpoint: <br>
    ```
    DELETE /professors/:id
    ```
5.  Update Professors by Id <br>
    Merubah data Professors berdasarkan Id <br>
    Endpoint: <br>
    ```
    PUT /professors/:id
    ```
### Rooms
1.  Get all Rooms <br>
    Mendapatkan semua data Rooms yang ada di database <br>
    Endpoint: <br>
    ```
    GET /rooms
    ```
2.  Get Rooms By Id <br>
    Mendapatkan data Rooms sesuai dengan id yang diberikan <br>
    Endpoint: <br>
    ```
    GET /rooms/:id
    ```
3.  Create new Rooms <br>
    Membuat data Rooms baru <br>
    Endpoint: <br>
    ```
    POST /rooms
    ```
    ```
    {
        "building_id": 1,
        "floor": 1,
        "room_name": "Ruang Kelas 1",
        "room_type": "Kelas",
        "room_number": "101",
        "responsible_professors": [1, 2]
    }

    ```
4.  Delete existing Rooms <br>
    Menghapus Rooms yang ada di database berdasarkan Id <br>
    Endpoint: <br>
    ```
    DELETE /rooms/:id
    ```
5.  Update Rooms by Id <br>
    Merubah data Rooms berdasarkan Id <br>
    Endpoint: <br>
    ```
    PUT /rooms/:id
    ```