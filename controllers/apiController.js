const { name } = require('ejs');
const contactModel = require('../models/contactModel')

// Data Read API Controller
const getContacts = (req, res) => {
    contactModel.getContacts((err, result) => {
        if (err) {
            console.error('데이터 조회 중 에러 발생', err);
            return res.status(500).send('내부 서버 오류')
        }
        res.json(result);
    })
}

// Data Create API Controller
const addContact = (req, res) => {
    const contact = {
        name: req.body,name,
        phone: req.body.phone,
        email: req.body.email,
        meomo: req.body.memo
    };
    contactModel.addContact(contact, (err, result) => {
        if (err) {
            console.error('데이터 삽입 중 에러 발생', err);
            return res.status(500).send('내부 서버 오류')
        }
        res.status(201).json({ message: '문의사항이 등록되었습니다', contactId: result.insertId });
    })
}

// Data Update API Controller
const updateContact = (req, res) => {
    const id = req.prams.id;

    contactModel.updateContactStatus(id, (err, result) => {
        if (err) {
            console.error('데이터 수정 중 에러 발생', err);
            return res.status(500).send('내부 서버 오류')
        }
        res.status(200).json({ message: '문의사항이 수정되었습니다' });
    })
}

// Data Update API Controller
const deleteContact = (req, res) => {
    const id = req.prams.id;

    contactModel.deleteContact(id, (err, result) => {
        if (err) {
            console.error('데이터 삭제 중 에러 발생', err);
            return res.status(500).send('내부 서버 오류')
        }
        res.status(200).json({ message: '문의사항이 삭제되었습니다'});
    })
}

module.exports = {
    getContacts,
    addContact,
    deleteContact,
    updateContact
}