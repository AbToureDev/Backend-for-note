import {Router} from 'express';
import { EntityManager } from 'typeorm';
import { Request, Response } from "express"
import {myDataSource} from "../app-data-source";
import {User} from '../src/entity/user.entity';
import {Note} from "../src/entity/note.entity";
const router=Router();

router.get('/', async (req, res) => {
    res.cookie('visited',true,{
        maxAge: 60000,
    });
    const notes = await myDataSource.getRepository(User).find()
    res.json(notes)
})
router.get('/:id', async (req, res) => {
    const notes = await myDataSource.getRepository(User).findBy({
        id: Number(req.params.id),
    })
    console.log(req.cookies)
    res.send(notes)
})
module.exports = router