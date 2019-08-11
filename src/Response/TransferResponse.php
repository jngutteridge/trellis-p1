<?php

namespace App\Response;

use Symfony\Component\HttpFoundation\JsonResponse;

class TransferResponse extends JsonResponse
{
    public function __construct($entity, int $status = 200, array $headers = [])
    {
        if ($entity != null) {
            $data = $entity->transfer();
        } else {
            $data = [];
            $status = 404;
        }
        parent::__construct($data, $status, $headers);
    }
}
