import multer from "multer";
import path from "path";

const checkFileType = (file, cb) => {
    const filetypes = /jpeg|png|jpg|avif|svg|pdf|webp|mp3/;  //fayl filter
    const extname = filetypes.test(
    path.extname(file.originalname)?.toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
    cb(null, true);
    } else {
    cb("You can only upload image and document files!");
    }
};

export const uploadMiddleware = multer({
    storage: multer.memoryStorage(),      //fayllar yuklangandan keyin vaqtinichalik shu yerda turadi
  limits: { fileSize: 50 * 1024 * 1024 }, // 50 MB
    fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
    },
});