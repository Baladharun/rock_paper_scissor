const lhs = document.querySelector('#lhs');
const src_lhs=lhs.getAttribute('src');
const rhs = document.querySelector('#rhs');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const chg = document.querySelector("#start_play");
const computer_score = document.querySelector("#comp_score");
const your_score = document.querySelector("#ur_score");

rock.addEventListener('click', () => {
    lhs.src = 'stone.png';
    generate();
})

paper.addEventListener('click', () => {
    lhs.src="paper.png";
    generate();
})
scissor.addEventListener('click', () => {
    lhs.src="scissor.png";
    generate();
})

function generate()
{
    r = Math.floor(Math.random()*3);
    if(r == 0)
    {
        rhs.src='stone.png';
    }
    else if(r == 1)
    {
        rhs.src='paper.png';
    }
    else
    {
        rhs.src='scissor.png';
    }
    check();
}
function check()
{
        const lhsFileName = lhs.src.substring(lhs.src.lastIndexOf('/') + 1);
        const rhsFileName = rhs.src.substring(rhs.src.lastIndexOf('/') + 1);
    
        if (lhsFileName === rhsFileName) {
            chg.innerHTML = "TIE";
        } else if (
            (lhsFileName === 'stone.png' && rhsFileName === 'scissor.png') ||
            (lhsFileName === 'paper.png' && rhsFileName === 'stone.png') ||
            (lhsFileName === 'scissor.png' && rhsFileName === 'paper.png')
        ) {
            chg.innerHTML = "YOU WON";
            your_score.innerHTML++;
        } else {
            chg.innerHTML = "COMPUTER WON";
            computer_score.innerHTML++;
        }
    
}
