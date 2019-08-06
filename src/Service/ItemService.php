<?php

namespace App\Service;

use App\Entity\Node;
use App\Repository\NodeRepository;
use App\Service\Exception\InvalidItemException;
use Ramsey\Uuid\UuidInterface;

class ItemService
{

    private $nodeRepository;

    public function __construct(NodeRepository $nodeRepository)
    {
        $this->nodeRepository = $nodeRepository;
    }

    /**
     * @return Node[]
     */
    public function getRootItems()
    {
        return $this->nodeRepository->getRootNodes();
    }

    /**
     * @param UuidInterface $uuid
     * @return Node
     * @throws InvalidItemException
     */
    public function getItem(UuidInterface $uuid)
    {
        $node = $this->nodeRepository->find($uuid);
        if ($node instanceof Node) {
            return $node;
        }
        throw new InvalidItemException($uuid);
    }
}
