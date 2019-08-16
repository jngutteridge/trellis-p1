<?php

namespace App\DataFixtures;

use App\Entity\Node;
use App\Entity\NodeType;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $rootNodeMedia = new Node();
        $rootNodeMedia->setTitle('Media');

        $nodeTypeMediaType = new NodeType();
        $nodeTypeMediaType->setTitle('Type');

        $nodeMediaTypeVideo = new Node();
        $nodeMediaTypeVideo->setTitle('Video');
        $nodeMediaTypeVideo->setType($nodeTypeMediaType);
        $nodeMediaTypeVideo->setParent($rootNodeMedia);

        $nodeMediaTypeAudio = new Node();
        $nodeMediaTypeAudio->setTitle('Audio');
        $nodeMediaTypeAudio->setType($nodeTypeMediaType);
        $nodeMediaTypeAudio->setParent($rootNodeMedia);


        $nodeTypeMediaForm = new NodeType();
        $nodeTypeMediaForm->setTitle('Form');

        $nodeFormFilm = new Node();
        $nodeFormFilm->setTitle('Film');
        $nodeFormFilm->setType($nodeTypeMediaForm);
        $nodeFormFilm->setParent($nodeMediaTypeVideo);

        $nodeFormShow = new Node();
        $nodeFormShow->setTitle('Show');
        $nodeFormShow->setType($nodeTypeMediaForm);
        $nodeFormShow->setParent($nodeMediaTypeVideo);

        $nodeFormPodcast = new Node();
        $nodeFormPodcast->setTitle('Podcast');
        $nodeFormPodcast->setType($nodeTypeMediaForm);
        $nodeFormPodcast->setParent($nodeMediaTypeAudio);


        $nodeTypeMediaStatus = new NodeType();
        $nodeTypeMediaStatus->setTitle('Status');

        $nodeFilmStatusWatching = new Node();
        $nodeFilmStatusWatching->setTitle('Watching');
        $nodeFilmStatusWatching->setType($nodeTypeMediaStatus);
        $nodeFilmStatusWatching->setParent($nodeFormFilm);


        $nodeTypeVideo = new NodeType();
        $nodeTypeVideo->setTitle('Video');

        $nodeFilm1 = new Node();
        $nodeFilm1->setTitle('Avengers Endgame');
        $nodeFilm1->setType($nodeTypeVideo);
        $nodeFilm1->setParent($nodeFilmStatusWatching);
        $nodeFilm2 = new Node();
        $nodeFilm2->setTitle('Alita');
        $nodeFilm2->setType($nodeTypeVideo);
        $nodeFilm2->setParent($nodeFilmStatusWatching);
        $nodeFilm3 = new Node();
        $nodeFilm3->setTitle('Black Mirror');
        $nodeFilm3->setType($nodeTypeVideo);
        $nodeFilm3->setParent($nodeFormFilm);
        $nodeFilm4 = new Node();
        $nodeFilm4->setTitle('A Star is Born');
        $nodeFilm4->setType($nodeTypeVideo);
        $nodeFilm4->setParent($nodeFormFilm);
        $nodeFilm5 = new Node();
        $nodeFilm5->setTitle('Lala Land');
        $nodeFilm5->setType($nodeTypeVideo);
        $nodeFilm5->setParent($nodeFormFilm);

        $nodeShow1 = new Node();
        $nodeShow1->setTitle('Game Face');
        $nodeShow1->setType($nodeTypeVideo);
        $nodeShow1->setParent($nodeFormShow);
        $nodeShow2 = new Node();
        $nodeShow2->setTitle('Years and Years');
        $nodeShow2->setType($nodeTypeVideo);
        $nodeShow2->setParent($nodeFormShow);
        $nodeShow3 = new Node();
        $nodeShow3->setTitle('Casual');
        $nodeShow3->setType($nodeTypeVideo);
        $nodeShow3->setParent($nodeFormShow);
        $nodeShow4 = new Node();
        $nodeShow4->setTitle('Stranger Things');
        $nodeShow4->setType($nodeTypeVideo);
        $nodeShow4->setParent($nodeFormShow);
        $nodeShow5 = new Node();
        $nodeShow5->setTitle('Umbrella Academy');
        $nodeShow5->setType($nodeTypeVideo);
        $nodeShow5->setParent($nodeFormShow);


        $nodeTypePodcast = new NodeType();
        $nodeTypePodcast->setTitle('Podcast');

        $nodePodcast1 = new Node();
        $nodePodcast1->setTitle('Dr Chatterjee');
        $nodePodcast1->setType($nodeTypePodcast);
        $nodePodcast1->setParent($nodeFormPodcast);
        $nodePodcast2 = new Node();
        $nodePodcast2->setTitle('Richard Nicholls');
        $nodePodcast2->setType($nodeTypePodcast);
        $nodePodcast2->setParent($nodeFormPodcast);
        $nodePodcast3 = new Node();
        $nodePodcast3->setTitle('Comedy Bang Bang');
        $nodePodcast3->setType($nodeTypePodcast);
        $nodePodcast3->setParent($nodeFormPodcast);

        $manager->persist($rootNodeMedia);
        $manager->persist($nodeTypeMediaType);
        $manager->persist($nodeMediaTypeVideo);
        $manager->persist($nodeMediaTypeAudio);
        $manager->persist($nodeTypeMediaForm);
        $manager->persist($nodeFormFilm);
        $manager->persist($nodeFormShow);
        $manager->persist($nodeFormPodcast);
        $manager->persist($nodeTypeMediaStatus);
        $manager->persist($nodeFilmStatusWatching);
        $manager->persist($nodeTypeVideo);
        $manager->persist($nodeFilm1);
        $manager->persist($nodeFilm2);
        $manager->persist($nodeFilm3);
        $manager->persist($nodeFilm4);
        $manager->persist($nodeFilm5);
        $manager->persist($nodeShow1);
        $manager->persist($nodeShow2);
        $manager->persist($nodeShow3);
        $manager->persist($nodeShow4);
        $manager->persist($nodeShow5);
        $manager->persist($nodeTypePodcast);
        $manager->persist($nodePodcast1);
        $manager->persist($nodePodcast2);
        $manager->persist($nodePodcast3);

        $user = new User();
        $user->setEmail('jackgutteridge@gmail.com');
        $manager->persist($user);

        $manager->flush();
    }
}
