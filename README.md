Game Of Life
============


Cloning
-------

    $ git clone https://github.com/digicoffey/game_of_life.git && cd game_of_life


Install
----------

    $ npm i


Run
-------

    $ npm run start


Testing
-------

    $ npm run test


Notes
-----------

My assumptions made while buidling the Game Of Life:

- Upon entering a room a query is sent to get the contents of the room, due to the response being random and one of either MONSTER or GOLD, there is no guarantee that re-entering a room will produce the previous result. This includes going 'home' to room 0,0.
