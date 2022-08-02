import { connection, status } from './database/connection';
import statusApp from './database/app';

function accessSystem(){
    connection({ip: "192.168.15.10", name: "MySQL"})
}

accessSystem();
status();
statusApp();