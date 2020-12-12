<?php

namespace App\Serializer;

use App\Entity\User;

class GetUserSerializer {

    private function setArray($users): object {
        
        $this->usersAsArray[] = [
            'id' => $users->getId(),
            'firstname' => $users->getFirstname(),
            'lastname' => $users->getLastname(),
            'email' => $users->getEmail(),
            'password' => $users->getPassword(),
            'startdate' => $users->getStartdate()
        ];
        
        return($this);
    }

    public function serialize($users){
        if (is_array($users)) {
            foreach($users as $user) {
                $this->setArray($user);
            }
        } else {
            $this->setArray($users);
        }
        
        return \json_encode($this->usersAsArray);
    }
}