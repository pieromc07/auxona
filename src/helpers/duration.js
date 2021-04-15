export const getDuration = (data) => {
    let time = 0
    const duration = new String(data)
    for (let i = duration.length - 1; i >= 0; i--) {
        const element = duration.charAt(i)
        if (element == "S") {
            let segundos
            if (duration[i - 2] != "M") {
                segundos = parseInt(duration[i - 2] + duration[i - 1])
            } else {
                segundos = parseInt(duration[i - 1])
            }

            time += (segundos)

        } else if (element == "M") {
            let minutos
            if (duration[i - 2] != "T") {
                minutos = parseInt(duration[i - 2] + duration[i - 1])
            } else {
                minutos = parseInt(duration[i - 1])
            }

            time += (minutos * 60)
        }

    }
    console.log(time);
    return time
}