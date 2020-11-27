<?php

namespace App\Serializer;

use App\Entity\User;

class UserSerializer {
    public function serialize($users) {
        $userJson = [];
        if (is_array($users)) {
            foreach($users as $user) {
                $userJson[] = [
                    'firstname' => $user->getFirstname(),
                    'lastname' => $user->getLastname(),
                    'email' => $user->getEmail(),
                    'password' => $user->getPassword(),
                    'startdate' => $user->getStartdate()
                ];
            }
        } else {
            $userJson[] = [
                'firstname' => $users->getFirstname(),
                'lastname' => $users->getLastname(),
                'email' => $users->getEmail(),
                'password' => $users->getPassword(),
                'startdate' => $users->getStartdate()
            ];
        }
        return \json_encode($userJson);
    }

    public function deserialize($content) {
        $postData = \json_decode($content);
        $userObject = new User();

        $userObject->setFirstname($postData->firstname);
        $userObject->setLastname($postData->lastname);
        $userObject->setEmail($postData->email);
        $userObject->setPassword($postData->password);
        $date = date_create($postData->startdate);
        $userObject->setStartdate($date);

        return $userObject;
    }
    
}