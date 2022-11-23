export default function Logo() {
    return (
        <>
            <div>
                Test Generator
            </div>
            <div 
                style={{ 
                    width: '200px', 
                    height: '200px', 
                    background: '#125CA1', 
                    borderRadius: '50%', 
                    fontSize: '60px', 
                    color: 'white',  
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    transform: 'rotate(0deg)', 
                    fontWeight: '700', 
                    fontFamily: 'arial'
                }}
            >
                test
            </div>
            <div>
                Zip code
            </div>
            <div 
                style={{ 
                    width: '200px', 
                    height: '200px', 
                    background: '#125CA1', 
                    borderRadius: '50%', 
                    fontSize: '120px', 
                    color: 'white',  
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    transform: 'rotate(0deg)', 
                    fontWeight: '700', 
                    fontFamily: 'arial'
                }}
            >
                #
            </div>
        </>
    );
}
