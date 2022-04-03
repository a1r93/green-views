import { Leaf1, Leaf2, Leaf3, Leaf4, LeavesContainer, LeavesWrapper } from './style';

const Leaves = () => (
    <LeavesContainer>
        <LeavesWrapper>
            <Leaf1 id="leaf1" withPoints />
            <Leaf2 id="leaf2" withPoints />
            <Leaf3 id="leaf3" withPoints />
            <Leaf4 id="leaf4" withPoints />
        </LeavesWrapper>
    </LeavesContainer>
);

export default Leaves;
