export function resizeImg (file:File, imageWidth:number, afterAction:(dataUriScheme:string)=>void) {

    var canvas = document.createElement("canvas")
    var ctx = canvas.getContext('2d')
    var image = new Image()

    canvas.width = 0
    canvas.height = 0

    image.src = URL.createObjectURL(file)
    image.onload = ()=> {

        var w = imageWidth
        var h = image.height * (imageWidth/image.width)

        canvas.width = w
        canvas.height = h

        ctx!.drawImage(image, 0, 0, w, h)

        // データURIスキームとして取得
        afterAction(canvas.toDataURL(file.type))
    }
}

export function numberTo0xFF(num: number): string {
    let f = parseInt(num.toString()).toString(16)
    if (f.length === 1) {
        f = "0" + f
    }
    return f.toUpperCase()
}

export function copyToClipboard(copyText: string): void {
    const ta: HTMLTextAreaElement = document.createElement("textarea")
    ta.value = copyText
    document.body.appendChild(ta)
    ta.select()
    document.execCommand("copy")
    ta.parentElement!.removeChild(ta)
}