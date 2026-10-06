export async function register(req,res){
    const user = await authService.register(req.body)
    res.status(200).json(user);
}

export async function login(req,res){
    const user = await authService.register(req.body)
    res.status(200).json(user);
}

