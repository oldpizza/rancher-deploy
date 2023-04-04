import dotenv from 'dotenv';
dotenv.config()

function test() {
    console.log(process.env.HOST_URL)
}
test()