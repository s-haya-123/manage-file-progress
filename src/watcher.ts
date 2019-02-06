import * as chokidar from 'chokidar';
 
//chokidarの初期化
class Watcher {
    private watcher: chokidar.FSWatcher;
 
    constructor( path: string ) {
        this.watcher = chokidar.watch( path, {
            ignored:/[\/\\]\./,
            persistent:true
        } );
 
        if( this.watcher ) {
            this.watcher.on('ready', () => {
                console.log("ready watching...");
 
                this.watcher.on('add', ( path ) => {
                    console.log( path + " added.");
                });
 
                this.watcher.on('change', ( path ) => {
                    console.log( path + " changed.");
                });
            } );
        } else {
            console.log( 'error' );
        }
    }
}
export { Watcher };