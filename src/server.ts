const { LOCAL_PORT } = process.env

export class Server {
    app: any
    PORT: number | string | undefined
    constructor(app: any) {
        this.app = app
        this.PORT = process.env.PORT || LOCAL_PORT
    }

    start() {
        this._serverListen(this.app)
    }

    _serverListen(app: any) {
        app.listen(
            this.PORT,
            console.log(`Server started at ${this.PORT}`)
        )
    }
}
