export const download = async (id: number, name: string) => {
    const url = `https://www.barbershoptags.com/dbaction.php?action=DownloadFile&dbase=tags&id=${id}&fldname=${name}`;
    const res = await fetch(url);
    const file = res.body;

    return new Response(file, {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    });
}