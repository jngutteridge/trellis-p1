<?php

namespace App\Controller;

use App\Response\TransferResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route(path="/login")
 */
class LoginController extends AbstractController
{
    /**
     * @Route(path="")
     */
    public function user()
    {
        return new TransferResponse($this->getUser());
    }

    /**
     * @Route(path="/error")
     */
    public function error()
    {
        return new JsonResponse([

        ]);
    }
}
