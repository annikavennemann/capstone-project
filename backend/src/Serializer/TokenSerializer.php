<?php

namespace App\Serializer;

use App\Entity\Token;

class TokenSerializer {
    public function serialize($token) {
        $tokenArray = [
            'value' => $token->getValue(),
            'validuntil' => $token->getValiduntil(),
        ];

        return \json_encode($tokenArray);
    }

}