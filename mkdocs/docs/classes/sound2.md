```js
new sound2(src, playbackRate, volume)
```

| Parameters          | Type      | Description                                       | Default Value  |
|---------------------|-----------|---------------------------------------------------|----------------|
| src                 | `string`  | Sound URL                                         | -              |
| playbackRate        | `number`  | Play back rate.                                   | 1.0            |
| volume              | `number`  | The volume of the sound                           | 1.0            |

## Attributes


| Attributes    | Description                                 |
|---------------|---------------------------------------------|
| `audioSrc`    | Hold the audio src.                         |
| `playbackRate`| Rate at which the audio will be played.     |
| `volume`      | Volume level of the audio.                  |
| `audioClones` | Hold every sound object that is playing     |


## Methods

### play()
Creates a new audio object and starts playing it.

### stopAll()
Stops all audios in `audioClones` and empties the array(deletes all audio elemnts)
