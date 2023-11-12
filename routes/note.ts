import {Router} from 'express';
import { EntityManager } from 'typeorm';
import { Request, Response } from "express"
import {myDataSource} from "../app-data-source";
import {Note} from '../src/entity/note.entity'
const router=Router();

router.get('/', async (req, res) => {
    const notes = await myDataSource.getRepository(Note).find()
    res.json(notes)
})

router.post('/', async (req: Request, res: Response) => {
    console.log(req.body)
    const notes = myDataSource.getRepository(Note).create(req.body)
    console.log('note:',notes)
    const result = myDataSource.getRepository(Note).save(req.body)
    res.send(result)
})

router.get('/:id', async (req, res) => {
    const notes = await myDataSource.getRepository(Note).findBy({
        id: Number(req.params.id),
    })
    res.send(notes)
})

router.put('/:id', (req, res) => {
    const note = myDataSource.getRepository(Note).findOneBy({
        id: Number(req.params.id),
    })
    const { title, content } = req.body;

    // console.log(note)
    console.log(title)
    console.log(content)
    // myDataSource.getRepository(Note).merge(note, req.body)
    // const result = myDataSource.getRepository(Note).save(note)
    res.send('result')
})

router.delete('/:id', async (req, res) => {
    const results = await myDataSource.getRepository(Note).delete(req.params.id)
    return res.send(results)
})

module.exports = router