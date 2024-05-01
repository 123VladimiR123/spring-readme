db = db.getSiblingDB('mongodb');

db.createCollection('profiles');
db.createCollection('comments');
db.createCollection('chats');
db.createCollection('messages');

db.createUser({user: "admin", pwd: "admin", roles:[{role: "dbOwner", db:"mongodb"}]});