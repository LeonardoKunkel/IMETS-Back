const express = require('express'),
      anexo1Model = require('../models/anexo1Model'),
      app = express();
      
app.post('/create', (req, res) => {
    let body = req.body;
    let newData = {
        C1: body.C1,
        C2: body.C2,
        C3: body.C3,
        C4: body.C4,
        C5: body.C5,
        C6: body.C6,
        C7: body.C7,
        C8: body.C8,
        C9: body.C9,
        C10: body.C10,
        C11: body.C11,
        C12: body.C12,
        C13: body.C13,
        C14: body.C14,
        C15: body.C15,
        C16: body.C16,
        C17: body.C17,
        C18: body.C18,
        C19: body.C19,
        C20: body.C20,
        C21: body.C21,
        C22: body.C22,
        C23: body.C23,
        C24: body.C24,
        C25: body.C25,
        C26: body.C26,
        C27: body.C27,
        C28: body.C28,
        C29: body.C29,
        C30: body.C30,
        C31: body.C31,
        C32: body.C32,
        C33: body.C33,
        C34: body.C34,
        C35: body.C35,
        C36: body.C36,
        C37: body.C37,
        C38: body.C38,
        C39: body.C39,
        C40: body.C40,
        C41: body.C41,
        C42: body.C42,
        C43: body.C43,
        C44: body.C44,
        C45: body.C45,
        C46: body.C46,
        C47: body.C47,
        C48: body.C48,
        C49: body.C49,
        C50: body.C50,
        C51: body.C51,
        C52: body.C52,
        C53: body.C53,
        C54: body.C54,
        C55: body.C55,
        C56: body.C56,
        C57: body.C57,
        C58: body.C58,
        C59: body.C59,
        C60: body.C60,
        C61: body.C61,
        C62: body.C62,
        C63: body.C63,
        C64: body.C64,
        C65: body.C65,
        C66: body.C66,
        C67: body.C67,
        C68: body.C68,
        C69: body.C69,
        C70: body.C70,
        C71: body.C71,
        C72: body.C72,
        C73: body.C73,
        C74: body.C74,
        C75: body.C75,
        C76: body.C76,
        C77: body.C77,
        C78: body.C78,
        C79: body.C79,
        C80: body.C80,
        C81: body.C81,
        C82: body.C82,
        C83: body.C83,
        C84: body.C84,
        C85: body.C85,
        C86: body.C86,
        C87: body.C87,
        T1: body.T1,
        T2: body.T2,
        T3: body.T3,
        T4: body.T4,
        T5: body.T5,
        T6: body.T6,
        T7: body.T7,
        T8: body.T8,
        T9: body.T9,
        T10: body.T10,
        T11: body.T11,
        T12: body.T12,
        T13: body.T13,
        T14: body.T14,
        T15: body.T15,
        T16: body.T16,
        T17: body.T17,
        T18: body.T18,
        T19: body.T19,
        T20: body.T20,
        T21: body.T21,
        T22: body.T22,
        T23: body.T23,
        T24: body.T24,
        T25: body.T25,
        T26: body.T26,
        T27: body.T27,
        T28: body.T28,
        T29: body.T29,
        T30: body.T30,
        T31: body.T31,
        T32: body.T32,
        T33: body.T33,
        T34: body.T34,
        T35: body.T35,
        T36: body.T36,
        T37: body.T37,
        T38: body.T38,
        T39: body.T39,
        T40: body.T40,
        T41: body.T41,
        T42: body.T42,
        T43: body.T43,
        T44: body.T44,
        T45: body.T45,
        T46: body.T46,
        T47: body.T47,
        T48: body.T48,
        T49: body.T49,
        T50: body.T50,
        T51: body.T51,
        T52: body.T52,
        T53: body.T53,
        T54: body.T54,
        T55: body.T55,
        T56: body.T56,
        T57: body.T57,
        T58: body.T58,
        T59: body.T59,
        T60: body.T60,
        T61: body.T61,
        T62: body.T62,
        T63: body.T63,
        T64: body.T64,
        T65: body.T65,
        T66: body.T66,
        T67: body.T67,
        T68: body.T68,
        T69: body.T69,
        T70: body.T70,
        T71: body.T71,
        T72: body.T72,
        T73: body.T73,
        T74: body.T74,
        T75: body.T75,
        T76: body.T76,
        T77: body.T77,
        T78: body.T78,
        T79: body.T79,
        T80: body.T80,
        T81: body.T81,
        T82: body.T82,
        T83: body.T83,
        T84: body.T84,
        T85: body.T85,
        T86: body.T86,
        T87: body.T87,
        T88: body.T88,
        T89: body.T89,
        T90: body.T90,
        T91: body.T91,
        T92: body.T92,
        J1: body.J1,
        J2: body.J2,
        J3: body.J3,
        J4: body.J4,
        J5: body.J5,
        J6: body.J6,
        J7: body.J7,
        J8: body.J8,
        J9: body.J9,
        J10: body.J10,
        J11: body.J11,
        J12: body.J12,
        J13: body.J13,
        J14: body.J14,
        J15: body.J15,
        J16: body.J16,
        J17: body.J17,
        J18: body.J18,
        J19: body.J19,
        J20: body.J20,
        J21: body.J21,
        J22: body.J22,
        J23: body.J23,
        J24: body.J24,
        J25: body.J25,
        J26: body.J26,
        J27: body.J27,
        J28: body.J28,
        J29: body.J29,
        J30: body.J30,
        J31: body.J31,
        J32: body.J32,
        J33: body.J33,
        J34: body.J34,
        J35: body.J35,
        J36: body.J36,
        J37: body.J37,
        J38: body.J38,
        J39: body.J39,
        J40: body.J40,
        J41: body.J41,
        J42: body.J42,
        J43: body.J43,
        J44: body.J44,
        J45: body.J45,
        J46: body.J46,
        J47: body.J47,
        J48: body.J48,
    };
    anexo1Model.create(newData, (err, anexo1) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'No se registraron los datos',
                err
            });
        }
        res.status(200).json({
            ok: true,
            anexo1
        });
    });
});

app.get('/', (req, res) => {
    anexo1Model.find((err, anexo1) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'No se pudieron consultar los datos'
            });
        }
        res.status(200).json({
            ok: true,
            anexo1
        });
    });
});

module.exports = app;