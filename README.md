# ejabberd nod chat
# for initializing dockerrized version of ejabberd server
docker run --name ejabberd -p 5222:5222 ejabberd/ec
# for creating users
docker exec -it ejabberd bin/ejabberdctl register admin localhost password


