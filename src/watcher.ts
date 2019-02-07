import * as chokidar from 'chokidar';
 
//chokidarの初期化
class Watcher {
    private watcher: chokidar.FSWatcher;
 
    constructor( path: string ,addCallback: (path:string)=>void, changeCallback: (path:string)=>void) {
        this.watcher = chokidar.watch( path, {
            ignored:/[\/\\]\./,
            persistent:true
        } );
 
        if( this.watcher ) {
            this.watcher.on('ready', () => {
                console.log("ready watching...");
 
                this.watcher.on('add', addCallback);
                this.watcher.on('change', changeCallback);
            } );
        } else {
            console.log( 'error' );
        }
    }
}
export { Watcher };