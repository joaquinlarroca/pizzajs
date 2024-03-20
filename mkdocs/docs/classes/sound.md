```js
new sound(url, playbackRate, volume, loop)
```

| Parameters          | Type      | Description                                       | Default Value  |
|---------------------|-----------|---------------------------------------------------|----------------|
| url                 | `string`  | Sound URL                                         | -              |
| playbackRate        | `number`  | Play back rate.                                   | 1.0            |
| volume              | `number`  | The volume of the sound                           | 1.0            |
| loop                | `boolean` | Wheter it loop or not                             | [0, 0]         |

## Attributes


| Attributes    | Description                                 |
|---------------|---------------------------------------------|
| `sound`       | An Audio object.                            |
| `loop`        | Indicates whether the sound will loop.      |
| `playbackRate`| Rate at which the audio will be played.     |
| `volume`      | Volume level of the audio.                  |
| `ended`       | Indicates if the audio has ended.           |
| `duration`    | Duration of the audio in seconds.           |
| `currentTime` | Current playback time of the audio.         |
| `paused`      | Indicates if the audio is paused.           |

## Methods

### play()
Starts playing the audio 

### pause()
Pauses the audio

### stop()
Stops the audio and sets the currentTime to 0

### setCurrentTime(seconds)
Sets the current time in seconds