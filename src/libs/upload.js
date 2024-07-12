const { default: toast } = require("react-hot-toast");

export async function upload(e, callback) {
    const file = e.target.files?.[0];

    if (file) {
        const uploadPromise = new Promise((resolve, reject) => {
            const data = new FormData;
            data.set('file', file)
            
            fetch('/api/upload', {
                method: 'POST',
                body: data,
            }).then(res => {
                if (res.ok) {
                    res.json().then(link => {
                        callback(link);
                        resolve(link)
                    })
                } else {
                    reject()
                }
            })
        })

        await toast.promise(uploadPromise, {
            loading: 'Uploading...',
            success: 'Uploaded',
            error: 'Upload failed',
        })
        
    }
}