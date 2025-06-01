import { FSExtra } from "@plugins/fsExtra"

const onFsExTra: FSExtra = new FSExtra();

class FileExtensionUtil {
    public async readDataFromJsonFile(pathToFile: string) {
        return await onFsExTra.readDataSyncFromJsonFile(pathToFile)
    }
}

export const onFileExtensionUtil: FileExtensionUtil = new FileExtensionUtil()