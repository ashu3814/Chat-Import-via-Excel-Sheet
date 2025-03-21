import { Controller, Post , UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import * as XLSX from 'xlsx';


@Controller('chat')
export class ChatController{
    @Post('import')
    @UseInterceptors(FileInterceptor('file'))
    async importChat(@UploadedFile() file: Express.Multer.File){
        const workbook = XLSX.read(file.buffer, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet);
        return {message : 'success', data}

    }
}