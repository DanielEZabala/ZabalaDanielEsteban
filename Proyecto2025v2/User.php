<?php

require_once "Database.php";

class User {
    private $db;

    public function __construct() {
        $this->db = (new Database())->connect();
    }

    public function add($data) {
        $sql = "INSERT INTO users (
            gender, title, first_name, last_name,
            street_number, street_name, city, state, country, postcode,
            latitude, longitude,
            timezone_offset, timezone_description,
            email,
            uuid, username, password, salt, md5, sha1, sha256,
            dob_date, dob_age,
            registered_date, registered_age,
            phone, cell,
            id_name, id_value,
            picture_large, picture_medium, picture_thumbnail,
            nat
        ) VALUES (
            :gender, :title, :first_name, :last_name,
            :street_number, :street_name, :city, :state, :country, :postcode,
            :latitude, :longitude,
            :timezone_offset, :timezone_description,
            :email,
            :uuid, :username, :password, :salt, :md5, :sha1, :sha256,
            :dob_date, :dob_age,
            :registered_date, :registered_age,
            :phone, :cell,
            :id_name, :id_value,
            :picture_large, :picture_medium, :picture_thumbnail,
            :nat
        )";

        $stmt = $this->db->prepare($sql);

        $params = [
            ':gender' => $data['gender'],
            ':title' => $data['name']['title'],
            ':first_name' => $data['name']['first'],
            ':last_name' => $data['name']['last'],
            ':street_number' => $data['location']['street']['number'],
            ':street_name' => $data['location']['street']['name'],
            ':city' => $data['location']['city'],
            ':state' => $data['location']['state'],
            ':country' => $data['location']['country'],
            ':postcode' => $data['location']['postcode'],
            ':latitude' => $data['location']['coordinates']['latitude'],
            ':longitude' => $data['location']['coordinates']['longitude'],
            ':timezone_offset' => $data['location']['timezone']['offset'],
            ':timezone_description' => $data['location']['timezone']['description'],
            ':email' => $data['email'],
            ':uuid' => $data['login']['uuid'],
            ':username' => $data['login']['username'],
            ':password' => $data['login']['password'],
            ':salt' => $data['login']['salt'],
            ':md5' => $data['login']['md5'],
            ':sha1' => $data['login']['sha1'],
            ':sha256' => $data['login']['sha256'],
            ':dob_date' => date('Y-m-d H:i:s', strtotime($data['dob']['date'])),
            ':dob_age' => $data['dob']['age'],
            ':registered_date' => date('Y-m-d H:i:s', strtotime($data['registered']['date'])),
            ':registered_age' => $data['registered']['age'],
            ':phone' => $data['phone'],
            ':cell' => $data['cell'],
            ':id_name' => $data['id']['name'],
            ':id_value' => $data['id']['value'],
            ':picture_large' => $data['picture']['large'],
            ':picture_medium' => $data['picture']['medium'],
            ':picture_thumbnail' => $data['picture']['thumbnail'],
            ':nat' => $data['nat']
        ];

        return $stmt->execute($params);
    }

    public function getAll() {
        $sql = "SELECT * FROM users";
        $stmt = $this->db->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function update($id, $nombre, $apellido) {
        $sql = "UPDATE users SET first_name = :nombre, last_name = :apellido WHERE id = :id";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([':nombre' => $nombre, ':apellido' => $apellido, ':id' => $id]);
    }

    public function delete($id) {
        $sql = "DELETE FROM users WHERE id = :id";
        $stmt = $this->db->prepare($sql);
        $stmt->execute([':id' => $id]);
    }
}


?>