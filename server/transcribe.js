// // npm install assemblyai

// import { AssemblyAI } from 'assemblyai'

// const client = new AssemblyAI({
//   apiKey: "assembly_APIKEY"
// })

// const audioUrl =
//   'cloudinary_url'

// const config = {
//   audio_url: audioUrl
// }




// const run = async () => {
//   const transcript = await client.transcripts.create(config)
//   console.log(transcript)
//   console.log(transcript.text)
// }

// run()

// Start by making sure the `assemblyai` package is installed.
// If not, you can install it by running the following command:
// npm install assemblyai

// import { AssemblyAI } from 'assemblyai';

// const client = new AssemblyAI({
//   apiKey: 'assembly_APIKEY',
// });

// const FILE_URL =
//   'cloudinary_url';

// // You can also transcribe a local file by passing in a file path
// // const FILE_URL = './path/to/file.mp3';

// // Request parameters where auto_highlights has been enabled
// const data = {
//   audio_url: FILE_URL,
//   auto_highlights: true
// }

// const run = async () => {
//   const transcript = await client.transcripts.create(data);
//   console.log(transcript.text);

//   for (let result of transcript.auto_highlights_result.results) {
//     console.log(
//       `Highlight: ${result.text}, Count: ${result.count}, Rank: ${result.rank}`
//     );
//   }
// };

// run();

// import { AssemblyAI } from 'assemblyai'

// const client = new AssemblyAI({
//   apiKey: 'assembly_APIKEY'
// })

// const audioUrl =
//   'cloudinary_url'

// const params = {
//   audio: audioUrl,
//   auto_chapters: true
// }

// const run = async () => {
//   const transcript = await client.transcripts.transcribe(params)

//   for (const chapter of transcript.chapters) {
//     console.log(`${chapter.start}-${chapter.end}: ${chapter.headline}`)
//   }
// }

// run()

import { AssemblyAI } from 'assemblyai'
import config from config;



const cloudinary_url = config.get('CLOUDINARY_URL');



const client = new AssemblyAI({
  apiKey: assembly_APIKEY
})

const audioUrl =
  cloudinary_url

const params = {
  audio: audioUrl,
  summarization: true,
  summary_model: 'conversational',
  summary_type: 'bullets_verbose',
  speaker_labels:true,
//   dual_channel:true
}

const run = async () => {
  const transcript = await client.transcripts.transcribe(params)

  console.log(transcript.summary)
}

run()

