<?php


namespace App\Service\Exception;

use Exception;
use Ramsey\Uuid\UuidInterface;
use Throwable;

class InvalidItemException extends Exception
{
    public function __construct(UuidInterface $uuid, Throwable $previous = null)
    {
        parent::__construct('Cannot find ' . $uuid->toString(), 404, $previous);
    }
}
