const livros = [
    {
        id: 1,
        name: "Sapiens - Uma Breve História da Humanidade",
        autor: "Yuval Harari",
        category: "História",
        pages: 354,
        recomended: true,
        read: true
    },
    {
        id: 2,
        name: "Neuromancer",
        autor: "William Gibson",
        category: "Ficção",
        pages: 198,
        recomended: true,
        read: false
    },
    {
        id: 3,
        name: "Marketing 4.0: Do tradicional ao digital",
        autor: "Philip Kotler",
        category: "Marketing",
        pages: 152,
        recomended: false,
        read: true
    },
    {
        id: 4,
        name: "O Herói de Mil Faces",
        autor: "Joseph Campbell",
        category: "Mitologia",
        pages: 274,
        recomended: true,
        read: true
    },

]

module.exports = livros // exporta o array de objetos pra ser usado pela aplicação