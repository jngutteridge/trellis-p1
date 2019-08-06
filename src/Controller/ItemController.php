<?php

namespace App\Controller;

use App\Entity\Node;
use App\Service\Exception\InvalidItemException;
use App\Service\ItemService;
use Ramsey\Uuid\Uuid;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route(path="/item")
 */
class ItemController extends AbstractController
{

    private $itemService;

    public function __construct(ItemService $itemService)
    {
        $this->itemService = $itemService;
    }

    /**
     * @Route(path="/")
     * @return Response
     */
    public function rootItems(): Response
    {
        $items = $this->itemService->getRootItems();
        return $this->json(array_map(function (Node $item) {
            return $item->transfer();
        }, $items));
    }

    /**
     * @Route(path="/{id}")
     * @param string $id
     * @return Response
     */
    public function item(string $id): Response
    {
        try {
            $item = $this->itemService->getItem(Uuid::fromString($id));
            return $this->json($item->transfer());
        } catch (InvalidItemException $exception) {
            return $this->json([], 404);
        }
    }
}
