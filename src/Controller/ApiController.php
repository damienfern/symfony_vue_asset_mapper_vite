<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ApiController
{

    #[Route('/api/simple')]
    public function simple(): JsonResponse
    {
        return new JsonResponse(['message' => 'Hello World!']);
    }

}