/*
const routes = () => [];
*/
const routes = (handler) => [{
        method: 'POST',
        path: '/notes',
        /*
        handler: addNoteHandler,
        */
        // postNoteHandler hanya menerima dan menyimpan "satu" note
        handler: handler.postNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        /*
        handler: getAllNotesHandler,
        */
        // getNotesHandler mengembalikan "banyak" note
        handler: handler.getNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        /*
        handler: getNoteByIdHandler,
        */
        // getNoteByIdHandler mengembalikan "satu" note
        handler: handler.getNoteByIdHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        /*
        handler: editNoteByIdHandler,
        */
        // putNoteByIdHandler hanya menerima dan mengubah "satu" note.
        handler: handler.putNoteByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        /*
        handler: deleteNoteByIdHandler,
        */
        handler: handler.deleteNoteByIdHandler,
    },
];

module.exports = routes;